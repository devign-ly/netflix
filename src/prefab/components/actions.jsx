export function BasicRow() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
    </div>
  );
}

export function BasicColumn() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
      <div style={{ width: '100px', height: '100px', backgroundColor: '#888' }} />
    </div>
  );
}
