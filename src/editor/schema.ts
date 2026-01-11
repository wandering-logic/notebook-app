import { Schema } from "prosemirror-model";
import { marks, nodes } from "prosemirror-schema-basic";

export const schema = new Schema({
  nodes: {
    doc: {
      content: "title subtitle block+",
    },
    title: {
      content: "inline*",
      marks: "",
      parseDOM: [{ tag: "h1.doc-title" }],
      toDOM() {
        return ["h1", { class: "doc-title" }, 0];
      },
    },
    subtitle: {
      content: "inline*",
      marks: "em",
      parseDOM: [{ tag: "p.doc-subtitle" }],
      toDOM() {
        return ["p", { class: "doc-subtitle" }, 0];
      },
    },
    paragraph: {
      ...nodes.paragraph,
      group: "block",
    },
    heading: {
      ...nodes.heading,
      group: "block",
    },
    code_block: {
      ...nodes.code_block,
      group: "block",
    },
    blockquote: {
      ...nodes.blockquote,
      group: "block",
    },
    horizontal_rule: {
      ...nodes.horizontal_rule,
      group: "block",
    },
    text: nodes.text,
    // image: add later
    // bullet_list, ordered_list, list_item: add later
  },
  marks: {
    strong: marks.strong,
    em: marks.em,
    code: marks.code,
    link: marks.link,
    // strikethrough: add later
  },
});
