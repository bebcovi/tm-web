// @flow

export type MeetingAttributes = {
  date: string,
  note: string,
}
export type Meeting = {
  id: string,
  attributes: MeetingAttributes,
};
