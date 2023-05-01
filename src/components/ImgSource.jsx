const ImgSource = ({ src, type, extension = type }) => (
  <source
    type={`image/${type}`}
    srcSet={[`.${extension}`, `@2x.${extension}`, `@3x.${extension}`]
      .map((suffix, i) => `${src.replace(".jpg", suffix)} ${i + 1}x`)
      .join(", ")}
  />
);

export { ImgSource };
