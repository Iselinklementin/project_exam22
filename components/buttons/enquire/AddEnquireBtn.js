import Image from "next/image";
import Link from "next/link";
import { StyledAddBtn } from "./StyledAddEnquiresBtn.styled";
import Add from "../../../assets/add_stay.svg";

export const AddEnquireBtn = () => {
  return (
    <Link href="/add" passHref>
      <StyledAddBtn className="btn btn-primary my-3">
        <Image src={Add} alt="A button with a house" width="34px" height="36px" aria-label="Add enquiry" />
      </StyledAddBtn>
    </Link>
  );
};
