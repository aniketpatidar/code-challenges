const RichTextViewer = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
export default RichTextViewer
