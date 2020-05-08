const { fill2dArray } = require('../utils');

class ObjectTiles {
	constructor(data) {
		if (!data || data === '') {
			data = fill2dArray(-1, 40, 23);
		} else if (typeof data === 'string') {
			const lines = data.split(/[\n\r]/).filter(l => l).map(l => l.trimEnd());
			const cols = Math.max(...(lines.map(l => l.split(',').length)));
			const rows = lines.length;

			data = fill2dArray(-1, cols, rows);
			lines.forEach((line, index) => {
				for (let x = 0; x < line.length; x++) {
					data[index][x] = parseInt(line.charAt(x), 10);
				}
			});
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


// function ObjectTiles(s::String)
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