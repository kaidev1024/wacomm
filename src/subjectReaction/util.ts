export enum SubjectReactionType {
  Comment, Reply
}

export const SubjectReactionLabels = {
  [SubjectReactionType.Comment]: {
    Single: 'Comment',
    Plural: 'Comments',
  },
    [SubjectReactionType.Reply]: {
    Single: 'Reply',
    Plural: 'Replies',
  },
}
