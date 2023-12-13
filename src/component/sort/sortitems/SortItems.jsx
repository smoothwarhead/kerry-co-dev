
import SortBy from "../sortdropDowns/SortBy";
import Price from "../sortdropDowns/Price";
import SizeDrop from "../sortdropDowns/SizeDrop";

import PackSize from "../sortdropDowns/PackSize";

function SortItems() {

	return (
		
		<>
			<SortBy />
			<Price />
			<SizeDrop />
			<PackSize />
		</>
	);
}

export default SortItems;
