/**
 * Created by Mihail on 11/21/2016.
 */

import WinningPatternsTable from './winning-patterns-table';

class App {
	constructor() {
		// Horizontal winning pattern
		const horizontalWinningPattern = new WinningPatternsTable(
			document.querySelector('#horizontal'),
			5,
			5,
			'horizontal'
		);

		// Vertical winning pattern
		const verticalWinningPattern = new WinningPatternsTable(
			document.querySelector('#vertical'),
			5,
			5,
			'vertical'
		);

		// Diagonal winning pattern
		const diagonalWinningPattern = new WinningPatternsTable(
			document.querySelector('#diagonal'),
			5,
			5,
			'diagonal'
		);
	}
}
export default App;

(() => {
	const app = new App();
})();
