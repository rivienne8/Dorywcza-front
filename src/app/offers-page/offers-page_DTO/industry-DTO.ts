
export interface IndustryDTO {
  id: number;
  name: string;
  parentIndustryDTO: IndustryDTO;
}
