export default function ValuesList({ messages }) {
  return messages.map(({ id, name, description }) => {
    return (
      <li key={id}>
        {name}
        <p>{description}</p>
      </li>
    );
  });
}
