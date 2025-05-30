export default function Option({ valueArray }) {
  const optionEl = valueArray.map(({name, value}) => (
    <option value={value} key={value}>
      {name ? name : value}
    </option>
  ));

  return <>{optionEl}</>;
}
