import Quill from './core';

import List, { ListItem } from './formats/list';

import Marked from './formats/marked';
import Bold from './formats/bold';
import Italic from './formats/italic';
import Strike from './formats/strike';

import CodeBlock, { Code as InlineCode } from './formats/code';

Quill.register({
  'formats/marked': Marked,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/strike': Strike,
  'formats/code': InlineCode,

  'formats/list': List,
  'formats/list/item': ListItem,

  'formats/code-block': CodeBlock,
}, true);


export default Quill;
