class Style {
	constructor(fg = [], bg = []) {
		this.foregrounds = fg;
		this.backgrounds = bg;
	}
}

module.exports = Style;


// function Base.Dict(s::Style)
//     return Dict{String, Any}[
//         Dict{String, Any}(
//             "__name" => "Foregrounds",
//             "__children" => Dict.(s.foregrounds)
//         ),

//         Dict{String, Any}(
//             "__name" => "Backgrounds",
//             "__children" => Dict.(s.backgrounds)
//         )
//     ]
// end