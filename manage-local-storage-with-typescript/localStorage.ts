// Create a record
export const createRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) return { error: 'Store to localStorage failed. Invalid key or value.' };
  localStorage.setItem(key, value);
};

// Read a record
export const readRecord = (key: string): { error?: string } | void => {
  if (!key) return { error: 'Store to localStorage failed. Invalid key.' };
  localStorage.getItem(key);
};

// Update a record
export const updateRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) return { error: 'Store to localStorage failed. Invalid key or value.' };
  localStorage.setItem(key, value);
};

// Delete a record
export const deleteRecord = (key: string): { error?: string } | void => {
  if (!key) return { error: 'Store to localStorage failed. Invalid key.' };
  localStorage.removeItem(key)
};

// Clear all
export const clearAll = (): void => localStorage.clear();

// Store a json
export const storeJson = (key: string, value: {}): { error?: string } | void => {
  if (!key || !value) return { error: 'Store to localStorage failed. Invalid key or value.' };
  localStorage.setItem(key, JSON.stringify(value));
};

// Read item
export const readJson = (key: string): { error?: string } | string => {
  if (!key) return { error: 'Store to localStorage failed. Invalid key.' };
  return JSON.parse(localStorage.getItem(key) || '');
};

// Check for stored items
export const hasStoredItems = (): boolean => localStorage.length > 0 ? true : false;

// Check for support
export const isLocalStorageSupported = (): boolean => window.localStorage ? true : false;

// Iterating over items
export const iterateOverItems = (): void => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key || '');
    console.log(key, value);
  }
};