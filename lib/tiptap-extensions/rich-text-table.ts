import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    richTextTable: {
      insertRichTextTable: (options?: {
        rows?: number;
        cols?: number;
        withHeaderRow?: boolean;
      }) => ReturnType;
    };
  }
}

export const RichTextTable = Table.extend({
  name: 'table',

  addCommands() {
    return {
      ...this.parent?.(),
      insertRichTextTable:
        ({ rows = 3, cols = 3, withHeaderRow = true } = {}) =>
          ({ editor }) => {
            return editor.commands.insertTable({ rows, cols, withHeaderRow });
          },
    };
  },
});

export const RichTextTableRow = TableRow.extend({
  name: 'tableRow',
});

export const RichTextTableCell = TableCell.extend({
  name: 'tableCell',
});

export const RichTextTableHeader = TableHeader.extend({
  name: 'tableHeader',
});
