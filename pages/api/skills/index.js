import * as skills from '../../../data/skills.json';

export default (req, res) => {
	res.statusCode = 200;
	res.json(skills.skills);
};
