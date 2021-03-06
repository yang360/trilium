const clsHooked = require('cls-hooked');
const namespace = clsHooked.createNamespace("trilium");

async function init(callback) {
    return await namespace.runAndReturn(callback);
}

function wrap(callback) {
    return async () => await init(callback);
}

function getSourceId() {
    return namespace.get('sourceId');
}

function disableEntityEvents() {
    namespace.set('disableEntityEvents', true);
}

function isEntityEventsDisabled() {
    return !!namespace.get('disableEntityEvents');
}

function getSyncRows() {
    return namespace.get('syncRows') || [];
}

function addSyncRow(syncRow) {
    const syncRows = getSyncRows();

    syncRows.push(syncRow);

    namespace.set('syncRows', syncRows);
}

function reset() {
    clsHooked.reset();
}

module.exports = {
    init,
    wrap,
    namespace,
    getSourceId,
    disableEntityEvents,
    isEntityEventsDisabled,
    reset,
    getSyncRows,
    addSyncRow
};