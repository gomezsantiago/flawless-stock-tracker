import * as React from 'react';

export const SearchOptions = ({
  suggestions,
  listName,
}: SearchOptionsProps) => {
  const options = suggestions.map(({ label, id }) => (
    <option key={id}>{`${label}`}</option>
  ));
  return <datalist id={listName}>{options}</datalist>;
};

interface SearchOptionsProps {
  listName: string;
  suggestions: any[];
}
