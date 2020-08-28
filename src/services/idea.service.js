const BaseService = require("./base.service")
let _ideaRepository = null;

class IdeaService extends BaseService {
    constructor({ IdeaRepository }) {
        super(IdeaRepository)
        _ideaRepository = IdeaRepository
    }

    async getUserIdeas(author) {
        if (!author) {
            const error = new Error();
            error.status = 400;
            error.message = "userId must be sent"
        }
        return await _ideaRepository.getUserIdeas(author)
    }

    async upvoteIdea(ideaId) {
        if (!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = "ideaId musr be send";
            throw error;
        }
        const idea = await _ideaRepository.get(ideaId);
    }
}