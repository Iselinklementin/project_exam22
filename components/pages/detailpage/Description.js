import Heading from "../../../components/typography/Heading";
import Paragraph from "../../../components/typography/Paragraph";

export const Description = ({ className, hSize, heading, body }) => {
  return (
    <>
      <Heading className={className} size={hSize}>
        {heading}
      </Heading>
      <Paragraph>{body}</Paragraph>
    </>
  );
};

// trenger props her
