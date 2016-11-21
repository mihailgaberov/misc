/**
 * Created by Mihail on 11/20/2016.
 */

class WinningPatternsTable {
	constructor(elem, rows, cols, pattern) {
		this.elem = elem;
		this.rows = rows;
		this.cols = cols;
		this.pattern = pattern;

		// Create the DOM element
		this.createDomElement();
	}

	createDomElement() {
		const elTable = document.createElement('table');
		let i = 0;
		while (i < this.rows) {
			const elRow = document.createElement('tr');
			let j = 0;
			while (j < this.cols) {
				const elCell = document.createElement('td');
				elRow.appendChild(elCell);
				j++;
			}
			elTable.appendChild(elRow);
			i++;
		}

		this.elem.appendChild(elTable);
	}
}

export default WinningPatternsTable;