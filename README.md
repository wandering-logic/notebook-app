# ProseMirror-based Semantic Notebook Editor

This will hopefully eventually be a full progressive web app that supports editing rich text documents with semantic structure
(paragraphs, headings, quotes, code, lists, strong, emph, links, images, strikethrough) plus math (with KaTex) and eventually footnotes and tables.

The motivation is that I want something that is similarly functional to the OneNote PWA, but with better math support,
an open file format, and excellent export of static html (for publication on (for example) a blog).

The file format will be: each note is a subdirectory containing a ProseMirror json and additional assets (images).  A "notebook" will simply be a directory hierarchy of notes.

Near term I'll support syncing to local file system.  Longer term the plan is to sync to DropBox or Box or OneDrive for mobile support.
