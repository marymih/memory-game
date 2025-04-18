import RegularButton from './RegularButton';

export default function Form({ handleSubmit }) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>Start a Game</RegularButton>
    </form>
  );
}
