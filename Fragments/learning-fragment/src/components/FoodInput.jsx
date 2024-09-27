import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Items"
        className={styles.foodInput}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default FoodInput;
