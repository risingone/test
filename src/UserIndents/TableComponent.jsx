import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Table from '@editorjs/table';

const TableComponent = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: 'editor',
      tools: {
        table: Table,
      },
      data: {
        blocks: [
          {
            type: 'table',
            data: {
              content: [
                ['Header 1', 'Header 2', 'Header 3'],
                ['Data 1', 'Data 2', 'Data 3'],
                ['Data 4', 'Data 5', 'Data 6'],
              ],
            },
          },
        ],
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div id="editor" />
    </div>
  );
};

export default TableComponent;
