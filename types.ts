export interface CompetitionData {
    TournamentId: number
    TournamentCode: string
    TournamentName: string
    TournamentWhere: string
    TournamentWhenFrom: string
    TournamentWhenTo: string
  }
  
  export interface QualificationData {
    idQual: number
    tourCode: string
    id: number
    lastUpdate: string
    session: number
    sessionName: string
    target: string
    evCode: string
    licencia: string
    athlete: string
    familyname: string
    givenname: string
    countryCode: string
    countryName: string
    countryNameLong: string
    qualScore: number
    qualRank: number
    hits: number
    rank: number
    irm: string
    irmText: string
    ct: string
    tiebreak: string
    tiebreakClosest: string
    tiebreakDecoded: string
    D1Arrowstring: string
    D2Arrowstring: string
    D3Arrowstring: string
    D4Arrowstring: string
    D5Arrowstring: string
    D6Arrowstring: string
    D7Arrowstring: string
    D8Arrowstring: string
    dist_1: number
    dist_2: number
    dist_3: number
    dist_4: number
    dist_5: number
    dist_6: number
    dist_7: number
    dist_8: number
  }
  
  export interface FinalsData {
    idFinal: number
    tourCode: string
    id_1: number
    id_2: number
    lastUpdate: string
    evCode: string
    phaseName: string
    matchName: string
    matchMode: string
    matchNo: number
    licencia_1: string
    licencia_2: string
    athlete_1: string
    athlete_2: string
    target_1: string
    target_2: string
    countryCode_1: string
    countryCode_2: string
    countryName_1: string
    countryName_2: string
    winner_1: number
    winner_2: number
    score_1: number
    setScore_1: number
    setPoints_1: number
    setPointsByEnd_1: string
    arrowstring_1: string
    score_2: number
    setScore_2: number
    setPoints_2: number
    setPointsByEnd_2: string
    arrowstring_2: string
    irm_1: string
    irmText_1: string
    irm_2: string
    irmText_2: string
  }
  
  export interface ApiResponse {
    data: CompetitionData;
    finals: FinalsData[];
    qualification: QualificationData[];
    events: Event[];
  }

  export interface Event {
    idEvent: number;
    tourCode: string;
    event: string;
    descr: string;
    numDist: number;
    maxArrows: number;
  }