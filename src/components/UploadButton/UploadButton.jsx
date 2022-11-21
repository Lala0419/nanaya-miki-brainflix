import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

const uploader = Uploader({
	apiKey: "free",
});

const options = { multi: true };

export const MyDropzoneComponent = () => (
	<UploadDropzone
		uploader={uploader}
		options={options}
		width="600px"
		height="375px"
		onUpdate={(files) => {
			if (files.length === 0) {
				console.log("No files selected.");
			} else {
				console.log("Files uploaded:");
				console.log(files.map((f) => f.fileUrl));
			}
		}}
	/>
);
