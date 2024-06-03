import { linksArrayType } from "./Footer";
import ListComp from "./smallcomp/ListComp"
import Text from "./smallcomp/Text"



type FooterListCompType = {
    val: {
      id: string;
      heading: string;
      linksArray: linksArrayType[];
    }
  }

export const FooterListComp = ({ val }: FooterListCompType) => {

    return <div className={`flex flex-col gap-4 w-[30%]`} >
  
      <Text className={` font-ClashDisplayMedium  `} >{val.heading}</Text>

      <ListComp listItem={val.linksArray} />
  
    </div>
  }