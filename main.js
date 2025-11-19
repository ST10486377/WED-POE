
// Main JS enhancements for Part 3
document.addEventListener('DOMContentLoaded', function(){

  // Simple accordion
  document.querySelectorAll('.accordion-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const panel = btn.nextElementSibling;
      btn.classList.toggle('open');
      if(panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Lightbox
  document.querySelectorAll('.lightbox-link').forEach(link=>{
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      const src = link.getAttribute('href');
      createLightbox(src);
    });
  });

  function createLightbox(src){
    let lb = document.createElement('div');
    lb.id = 'simple-lightbox';
    lb.style.position='fixed'; lb.style.top=0; lb.style.left=0; lb.style.right=0; lb.style.bottom=0;
    lb.style.display='flex'; lb.style.alignItems='center'; lb.style.justifyContent='center';
    lb.style.background='rgba(0,0,0,0.8)'; lb.style.zIndex=9999;
    lb.innerHTML = '<div style="max-width:90%;max-height:90%"><img src="'+src+'" style="width:100%;height:auto;border-radius:6px;" /><div style="text-align:right;margin-top:6px"><button id="lb-close">Close</button></div></div>';
    document.body.appendChild(lb);
    document.getElementById('lb-close').addEventListener('click', ()=> lb.remove());
    lb.addEventListener('click', (ev)=>{ if(ev.target===lb) lb.remove(); });
  }

  // Simple search filter for items with data-title attribute
  const searchInput = document.getElementById('site-search');
  if(searchInput){
    searchInput.addEventListener('input', ()=>{
      const q = searchInput.value.toLowerCase();
      document.querySelectorAll('[data-title]').forEach(item=>{
        const t = item.dataset.title.toLowerCase();
        item.style.display = t.includes(q) ? '' : 'none';
      });
    });
  }

  // Form validation for enquiry form
  const enquiryForm = document.getElementById('enquiry-form');
  if(enquiryForm){
    enquiryForm.addEventListener('submit', function(e){
      e.preventDefault();
      clearErrors(enquiryForm);
      const name = enquiryForm.querySelector('[name="name"]').value.trim();
      const email = enquiryForm.querySelector('[name="email"]').value.trim();
      const service = enquiryForm.querySelector('[name="service"]').value;
      const quantity = enquiryForm.querySelector('[name="quantity"]').value;
      let ok = true;
      if(name.length < 2){ setError(enquiryForm,'name','Please enter your name (2+ chars).'); ok=false;}
      if(!/^\S+@\S+\.\S+$/.test(email)){ setError(enquiryForm,'email','Please enter a valid email.'); ok=false;}
      if(service === ''){ setError(enquiryForm,'service','Select a service.'); ok=false;}
      if(quantity !== '' && (!/^\d+$/.test(quantity) || Number(quantity) < 1)){ setError(enquiryForm,'quantity','Enter a valid quantity.'); ok=false;}
      if(!ok) return;
      // Simple processing: calculate cost and show summary
      const unitCost = 50; // example
      const qty = quantity === '' ? 1 : Number(quantity);
      const total = unitCost * qty;
      const resp = document.createElement('div');
      resp.className='enquiry-response';
      resp.innerHTML = '<h3>Enquiry received</h3><p>Thanks '+escapeHtml(name)+'. Estimated cost for "'+escapeHtml(service)+'" is R'+total.toLocaleString()+'. We will contact you at '+escapeHtml(email)+'.</p>';
      enquiryForm.parentNode.appendChild(resp);
      enquiryForm.reset();
    });
  }

  // Contact form: compile to mailto and open
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      clearErrors(contactForm);
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const type = contactForm.querySelector('[name="type"]').value;
      const message = contactForm.querySelector('[name="message"]').value.trim();
      let ok = true;
      if(name.length < 2){ setError(contactForm,'name','Please enter your name (2+ chars).'); ok=false;}
      if(!/^\S+@\S+\.\S+$/.test(email)){ setError(contactForm,'email','Please enter a valid email.'); ok=false;}
      if(message.length < 10){ setError(contactForm,'message','Message should be at least 10 characters.'); ok=false;}
      if(!ok) return;
      const to = 'recipient@example.com';
      const subject = encodeURIComponent('Website Contact: '+type+' - '+name);
      const body = encodeURIComponent('From: '+name+' ('+email+')\n\n'+message);
      window.location.href = 'mailto:'+to+'?subject='+subject+'&body='+body;
    });
  }

  function setError(form, name, msg){
    const el = form.querySelector('[name="'+name+'"]');
    if(!el) return;
    let p = el.parentNode.querySelector('.field-error');
    if(!p){ p = document.createElement('div'); p.className='field-error'; p.style.color='crimson'; p.style.fontSize='0.9em'; el.parentNode.appendChild(p); }
    p.textContent = msg;
  }
  function clearErrors(form){
    form.querySelectorAll('.field-error').forEach(n=>n.remove());
  }
  function escapeHtml(s){ return s.replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }

});


// AJAX submission (tries server endpoint, falls back to mailto)
async function postJson(url, data){
  try{
    const resp = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)});
    if(resp.ok) return await resp.json();
    throw new Error('Network response not ok');
  }catch(e){
    console.warn('Ajax failed', e);
    return null;
  }
}
// Replace enquiry submit to try AJAX
(function(){
  const enq = document.getElementById('enquiry-form');
  if(enq){
    enq.addEventListener('submit', async function(e){
      e.preventDefault();
      // reuse existing validation
      const name = enq.querySelector('[name="name"]').value.trim();
      const email = enq.querySelector('[name="email"]').value.trim();
      const service = enq.querySelector('[name="service"]').value;
      const quantity = enq.querySelector('[name="quantity"]').value || 1;
      const payload = {name,email,service,quantity};
      const resp = await postJson('http://localhost:3000/api/enquiry', payload);
      if(resp && resp.status==='ok'){
        const box = document.createElement('div'); box.className='enquiry-response';
        box.innerHTML = '<h3>Estimate (server)</h3><p>Estimated cost: R'+(resp.estimate||'N/A')+'</p>';
        enq.parentNode.appendChild(box);
        enq.reset();
      }else{
        // fallback to client-side processing already present in main.js; trigger submit again to run earlier handler
        enq.removeEventListener('submit', arguments.callee);
        enq.submit();
      }
    });
  }
})();

(function(){
  const contact = document.getElementById('contact-form');
  if(contact){
    contact.addEventListener('submit', async function(e){
      e.preventDefault();
      const name = contact.querySelector('[name="name"]').value.trim();
      const email = contact.querySelector('[name="email"]').value.trim();
      const type = contact.querySelector('[name="type"]').value;
      const message = contact.querySelector('[name="message"]').value.trim();
      const payload = {name,email,type,message};
      const resp = await postJson('http://localhost:3000/api/contact', payload);
      if(resp && resp.status==='ok'){
        alert('Message sent via server (stub)');
        contact.reset();
      }else{
        // fallback: compile mailto
        const to = 'recipient@example.com';
        const subject = encodeURIComponent('Website Contact: '+type+' - '+name);
        const body = encodeURIComponent('From: '+name+' ('+email+')\n\n'+message);
        window.location.href = 'mailto:'+to+'?subject='+subject+'&body='+body;
      }
    });
  }
})();