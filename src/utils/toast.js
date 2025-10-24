// toast.js
// Usage: import toast from './toast'; then call toast({ message, positive, negative })

let toastDiv = null;

function createToastDiv() {
  toastDiv = document.createElement('div');
  toastDiv.id = 'custom-toast-root';
  toastDiv.style.position = 'fixed';
  toastDiv.style.top = '24px';
  toastDiv.style.right = '24px';
  toastDiv.style.zIndex = 2000;
  toastDiv.style.minWidth = '280px';
  document.body.appendChild(toastDiv);
}

function clearToast() {
  if (toastDiv) {
    toastDiv.innerHTML = '';
  }
}

function toast({ message, positive = false, negative = false, duration = 2500 }) {
  if (!toastDiv) createToastDiv();
  clearToast();
  const msg = document.createElement('div');
  msg.style.transition = 'opacity 0.4s';
  msg.style.opacity = 1;
  msg.style.margin = 0;
  msg.style.borderRadius = '6px';
  msg.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
  msg.style.background = positive ? '#e6ffed' : negative ? '#ffeaea' : '#fff';
  msg.style.color = positive ? '#218838' : negative ? '#b71c1c' : '#23272f';
  msg.style.padding = '16px 24px';
  msg.style.fontSize = '16px';
  msg.style.fontWeight = 500;
  msg.style.display = 'flex';
  msg.style.alignItems = 'center';
  msg.style.gap = '12px';
  msg.innerHTML = message;
  toastDiv.appendChild(msg);
  setTimeout(() => {
    msg.style.opacity = 0;
    setTimeout(clearToast, 400);
  }, duration);
}

export { toast };
