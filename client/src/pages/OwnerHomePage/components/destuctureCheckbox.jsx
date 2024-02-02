import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function DestuctCheckbox() {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory1"
            name="animalcategory1"
            value="dog"
            color="primary"
          />
        }
        label="Dog"
      />
      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory2"
            name="animalcategory2"
            value="cat"
            color="primary"
          />
        }
        label="Cat"
      />
      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory3"
            name="animalcategory3"
            value="bird"
            color="primary"
          />
        }
        label="Bird"
      />
      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory4"
            name="animalcategory4"
            value="rabbit"
            color="primary"
          />
        }
        label="Rabbit"
      />
    </>
  );
}
export default DestuctCheckbox;
