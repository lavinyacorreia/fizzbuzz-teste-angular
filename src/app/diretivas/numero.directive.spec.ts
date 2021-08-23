import { NumeroDirective } from './numero.directive';

describe('NumeroDirective', () => {
  const directive = new NumeroDirective();
  
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('Deve remover caracteres não numéricos', () => {
    let $event = { target: { value: '1a2b3c' }};
    directive.onKeyup($event);
    expect($event.target.value).toBe('123');
  });
});
