export function fragment() {
  return <></>;
}

export function div() {
  return <div />;
}

export function text() {
  return <div>Sample text</div>;
}

export function text_span() {
  return <span>Sample text</span>;
}

export function h1() {
  return <h1>Heading 1</h1>;
}

export function h2() {
  return <h2>Heading 2</h2>;
}

export function img() {
  return <img src="https://picsum.photos/200/300" />;
}

export function BasicRow() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'space-between' }}>
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
    </div>
  );
}

export function BasicColumn() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'space-between' }}>
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
    </div>
  );
}
