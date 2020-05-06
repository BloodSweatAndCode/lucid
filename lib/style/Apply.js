class Apply {
	constructor(data, parallax) {
		this.__name = 'apply';
		this.__children = parallax;
		this.data = data;
		this.parallax = parallax;
	}
}

module.exports = Apply;

res["__name"] = "apply"
    res["__children"] = Dict.(a.parallax)