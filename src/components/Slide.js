import SlideStyle from "./Side.module.css";

function Slide({
  SegmentTitle,
  JsxContent,
  IlustrationImageAssetName,
  isReversed,
}) {
  const image_display = () => {
    if (IlustrationImageAssetName == undefined) return <></>;
    return (
      <div className={SlideStyle.IlustrationImage}>
        <img src={require(`../assets/${IlustrationImageAssetName}`)} />
      </div>
    );
  };

  return (
    <div
      className={`${SlideStyle.SlideWrapper} ${
        isReversed ? SlideStyle.Reversed : " "
      }`}
    >
      <div className={SlideStyle.Content}>
        <h2 className={SlideStyle.ContentTitle}> {SegmentTitle} </h2>
        {JsxContent}
      </div>
      {image_display()}
    </div>
  );
}

export default Slide;
