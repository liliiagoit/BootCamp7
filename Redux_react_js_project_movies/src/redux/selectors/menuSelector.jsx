export const playNowLength = (state) => state.showPlayNow.length;

// export const sortPlayNow = state => state.showPlayNow.sort((a, b) => a.release_date > b.release_date);

export const sortPlayNow = state => state.showPlayNow.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a, b) => b.release_date - a.release_date);
