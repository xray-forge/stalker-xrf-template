export const mockScriptSound = {
  list: ["pda_task", "attack_begin", "attack_begin_reply", "play_always_example", "looped_example"],
  pda_task: {
    type: "actor",
    npc_prefix: false,
    path: "device\\pda\\pda_objective",
    shuffle: "rnd",
    idle: "1,1,100",
  },
  attack_begin: {
    type: "npc",
    avail_communities: "stalker, bandit, dolg, freedom, army",
    npc_prefix: true,
    path: "alife\\attack\\attack_begin_",
    shuffle: "rnd",
    idle: "0,0,100",
  },
  attack_begin_reply: {
    type: "npc",
    avail_communities: "stalker, bandit",
    npc_prefix: true,
    path: "alife\\attack\\begin_reply_",
    shuffle: "rnd",
    idle: "0,0,100",
  },
  play_always_example: {
    type: "npc",
    avail_communities: "stalker, bandit",
    npc_prefix: true,
    path: "alife\\attack\\begin_reply_",
    shuffle: "rnd",
    idle: "0,0,100",
    play_always: true,
  },
  looped_example: {
    type: "looped",
    avail_communities: "stalker, bandit",
    npc_prefix: true,
    path: "alife\\attack\\begin_reply_",
    shuffle: "rnd",
    idle: "0,0,100",
  },
};
