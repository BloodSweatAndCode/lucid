const { fill2dArray } = require('./utils');

class ObjectTiles {
	constructor(data) {
		if (typeof data === 'string') {
			throw new Error('loading object tiles via strings not implemented');
		}

		if (!data) {
			data = fill2dArray(-1, 23, 40);
		}
		this.data = data;
	}

	size() {
		const height = this.data.length;
		const width = (this.data[0] || []).length;
		return [ width * 8, height * 8 ];
	}
}

module.exports = ObjectTiles;


// mutable struct ObjectTiles
//     data::Array{Integer, 2}

//     ObjectTiles() = new(fill(-1, (40, 23)))

//     ObjectTiles(d::Array{Int, 2}) = new(d)

//     function ObjectTiles(s::String)
//         s = chomp(replace(s, "\r\n" => "\n"))
//         lines = split(s, "\n")
//         lineLengths = length.(split.(lines, ','))

//         cols = maximum(lineLengths)
//         rows = length(lines)

//         res = fill(-1, rows, cols)

//         for (i, line) in enumerate(lines)
//             if isempty(line)
//                 continue
//             end

//             res[i, 1:lineLengths[i]] = parse.(Int, split(line, ','))
//         end

//         return new(res)
//     end
// end

// function Base.string(t::ObjectTiles)
//     return join(join.([t.data[i, :] for i in 1:size(t.data, 1)], ','), "\n")
// end