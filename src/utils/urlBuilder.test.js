import urlBuilder from './urlBuilder';

it('has all params', () => {
  expect(urlBuilder(
    "https://api.fda.gov/animalandveterinary/event.json?",
    [{ key: 'outcome.medical_status', value: "Died" },
    { key: 'animal.species', value: "Cat" },
    { key: 'animal.breed.is_crossbred', value: false }],
    "duration.value")).toEqual(`https://api.fda.gov/animalandveterinary/event.json?search=outcome.medical_status:"Died"+AND+animal.species:"Cat"+AND+animal.breed.is_crossbred:"false"&count=duration.value`);
});

it('misses count', () => {
  expect(urlBuilder(
    "https://api.fda.gov/animalandveterinary/event.json?",
    [{ key: 'outcome.medical_status', value: "Died" },
    { key: 'animal.species', value: "Cat" },
    { key: 'animal.breed.is_crossbred', value: false }]
    )).toEqual(`https://api.fda.gov/animalandveterinary/event.json?search=outcome.medical_status:"Died"+AND+animal.species:"Cat"+AND+animal.breed.is_crossbred:"false"`);
});

it('hos only one search param', () => {
  expect(urlBuilder(
    "https://api.fda.gov/animalandveterinary/event.json?",
    [{ key: 'outcome.medical_status', value: "Died" }]
    )).toEqual(`https://api.fda.gov/animalandveterinary/event.json?search=outcome.medical_status:"Died"`);
});

it('has no search param', () => {
  expect(urlBuilder(
    "https://api.fda.gov/animalandveterinary/event.json?"
    )).toEqual(`https://api.fda.gov/animalandveterinary/event.json?`);
});