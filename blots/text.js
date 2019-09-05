import Parchment from 'parchment';

class TextBlot extends Parchment.Text { }

// https://lodash.com/docs#escape
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeText(text) {
  return text.replace(/[&<>"']/g, s => entityMap[s]);
}

export { TextBlot as default, escapeText };
