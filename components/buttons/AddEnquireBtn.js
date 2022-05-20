import Image from "next/image";
import Link from "next/link";
import { StyledAddBtn } from "./StyledAddEnquiresBtn.styled";
import Add from "../../assets/add_stay.svg";

export const AddEnquireBtn = () => {
  return (
    <Link href="/add">
      <StyledAddBtn className="btn btn-primary my-3">
        <Image src={Add} width="34px" height="36px" />
      </StyledAddBtn>
    </Link>
  );
};
