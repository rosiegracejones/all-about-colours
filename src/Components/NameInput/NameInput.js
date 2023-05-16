import Button from "../Button/Button";


function NameInput() {
  return (
    <div>
      <h1>Hello!</h1>
      <form>
        <label>
          <input type="text" name="name" placeholder="What is your name?" />
        </label>
        <Button />
      </form>
    </div>
  );
}

export default NameInput;
