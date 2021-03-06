import regulars from "./regulars";


const validate = {
	required:
		(v: string) => (!v || v.trim() === '') ? 'required' : undefined,
	requiredEmail:
		(v: string) => (!v || v.trim() === '') ? 'required' : (!regulars.email.test(v)) ? 'email invalid' : undefined
}

export default validate

