import { useFormikContext } from "formik";
import { FarmFormValues } from "../../Types/FarmFormTypes";
import AddressInputField from "./AddressInputField";

const Step1 = () => {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext<FarmFormValues>();
  return (
    <div className="w-1/2 flex flex-col gap-5">
      <label htmlFor="averageRainfall" className="p-0">
        Average Rainfall
      </label>
      <input
        type="number"
        name="averageRainfall"
        placeholder="Enter The Average Rainfall"
        value={values.averageRainfall}
        onChange={handleChange}
        onBlur={handleBlur}
        className="focus:outline-none border-black border-2  p-2"
      />
      {errors.averageRainfall && touched.averageRainfall && (
        <div className="text-red-500">{errors.averageRainfall}</div>
      )}
      <label htmlFor="soliType">Soil Type</label>
      <select
        id="soilType"
        name="soilType"
        value={values.soilType}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" label="Select soil type" />
        <option value="Humus" label="Humus" />
        <option value="Loamy" label="Loamy" />
        <option value="Sandy" label="Sandy" />
        <option value="Alluvial" label="Alluvial" />
      </select>
      {errors.soilType && touched.soilType && (
        <div className="text-red-500">{errors.soilType}</div>
      )}
      <select
        id="soilColor"
        name="soilColor"
        value={values.soilColor}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" label="Select soil Color" />
        <option value="Black" label="Black" />
        <option value="Brownish" label="Brownish" />
      </select>
      {errors.soilColor && touched.soilColor && (
        <div className="text-red-500">{errors.soilColor}</div>
      )}
      <select
        id="soilTexture"
        name="soilTexture"
        value={values.soilTexture}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" label="Select Soil Texture" />
        <option value="Soft" label="Soft" />
        <option value="Hard" label="Hard" />
        <option value="Airy" label="Airy" />
      </select>
      {errors.soilTexture && touched.soilTexture && (
        <div className="text-red-500">{errors.soilTexture}</div>
      )}
      <input
        type="number"
        name="soilPH"
        placeholder="Enter the soilPh"
        value={values.soilPH}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.soilPH && touched.soilPH && (
        <div className="text-red-500">{errors.soilPH}</div>
      )}
      <AddressInputField />
    </div>
  );
};

export default Step1;
