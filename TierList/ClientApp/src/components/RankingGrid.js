const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionS = [];
    const cellCollectionA = [];
    const cellCollectionB = [];
    const cellCollectionC = [];


    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(o => o.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="rank-cell">
                {(item != null) ? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} /> 
                                : null}
            </div>);
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        for (var i = 1; i <= numCells; i++) {
            rankNum = (i === 1) ? 0 : (numCells * (rowNum - 1)) + i - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionS;
                label = "S";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionA;
                label = "A";
            }
                else if (rowNum === 3) {
                currCollection = cellCollectionB;
                label = "B";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionC;
                label = "C";
            }
            pushCellMarkupToArr(currCollection, rankNum, label);
        }
    }

    function createCellsForRows() {
        const maxRows = 4;
        for (var i = 1; i <= maxRows; i++) {
            createCellsForRow(i);
        }
    }

    function createRowsForGrid() {
        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionS}</div>);
        rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionA}</div>);
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionB}</div>);
        rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionC}</div>);

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (
        <div className= "rankings">
            {createRankingGrid() }
        </div>
    )
}
export default RankingGrid;