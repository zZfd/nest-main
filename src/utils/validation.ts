export default function FormatError(errors) {
  if (errors.length > 0) {
    const errObj = {};
    errors.forEach((err) => {
      const { property, constraints } = err;
      errObj[property] = Object.values(constraints);
    });
  }
}
