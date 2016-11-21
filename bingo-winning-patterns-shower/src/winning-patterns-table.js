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

	startAnimation() {
		// Define which pattern animation to start
		switch (this.pattern) {
			case 'horizontal':
				this.startHorizontalAnim();
				break;
			case 'vertical':
				this.startVerticalAnim();
				break;
			case 'diagonal':
				this.startDiagonallAnim();
				break;
		}
	}

	createDomElement() {
		const elTable = document.createElement('table');
		let i = 1;
		while (i <= this.rows) {
			const elRow = document.createElement('tr');
			let j = 1;
			while (j <= this.cols) {
				const elCell = document.createElement('td');
				elCell.setAttribute('id', 'x'+j + 'y' + i);
				elRow.appendChild(elCell);
				j++;
			}
			elTable.appendChild(elRow);
			i++;
		}
		this.elem.appendChild(elTable);

		this.startAnimation();
	}

	startHorizontalAnim() {
		let yIdx = 1;
		setInterval(() => {
			// Clear all cells background first
			const arrCells = this.elem.querySelectorAll('td');
			let cellIdx = 0;
			while (cellIdx < arrCells.length) {
				if (arrCells[cellIdx].classList.contains('highlighted')) {
					arrCells[cellIdx].classList.remove('highlighted');
				}
				cellIdx++;
			}

			let xIdx = 1;
			while (xIdx <= this.cols) {
				const elCell = this.elem.querySelector(`#x${xIdx}y${yIdx}`);
				elCell.classList.add('highlighted');
				xIdx++;
			}

			if (yIdx === this.rows) {
				yIdx = 0;
			}

			yIdx++;
		}, 1000)
	}

	startVerticalAnim() {
		let xIdx = 1;
		setInterval(() => {
			// Clear all cells background first
			const arrCells = this.elem.querySelectorAll('td');
			let cellIdx = 0;
			while (cellIdx < arrCells.length) {
				if (arrCells[cellIdx].classList.contains('highlighted')) {
					arrCells[cellIdx].classList.remove('highlighted');
				}
				cellIdx++;
			}

			let yIdx = 1;
			while (yIdx <= this.rows) {
				const elCell = this.elem.querySelector(`#x${xIdx}y${yIdx}`);
				elCell.classList.add('highlighted');
				yIdx++;
			}

			if (xIdx === this.rows) {
				xIdx = 0;
			}

			xIdx++;
		}, 1000)
	}

	startDiagonallAnim() {

	}
}

export default WinningPatternsTable;