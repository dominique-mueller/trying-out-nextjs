'use client';

export default function DoSomething() {
  const handleClick = () => {
    alert('I got clicked');
  };

  return (
    <button type="button" onClick={handleClick}>
      Click me!
    </button>
  );
}
