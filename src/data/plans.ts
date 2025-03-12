
export interface Plan {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  days: Day[];
}

export interface Day {
  number: number;
  content: string;
}

export const categories = [
  "anger",
  "love",
  "compassion",
  "wisdom",
  "mindfulness",
  "gratitude",
  "peace",
  "forgiveness",
  "equanimity",
  "meditation"
];

export const plans: Plan[] = [
  {
    id: "mindful-breathing",
    title: "Mindful Breathing",
    description: "A 7-day journey exploring the practice of mindful breathing, connecting with the present moment through the awareness of breath.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
    categories: ["mindfulness", "meditation", "peace"],
    days: [
      {
        number: 1,
        content: "Begin by finding a comfortable seated position. Close your eyes gently and bring attention to your natural breathing pattern. Notice the sensation of air entering and leaving your nostrils. Observe without judgment for 5-10 minutes."
      },
      {
        number: 2,
        content: "Today, focus on the rhythm of your breath. Count to four as you inhale, hold for two counts, then exhale for six counts. This conscious breathing pattern calms the nervous system and centers the mind."
      },
      {
        number: 3,
        content: "Expand your awareness to include the entire body as you breathe. Feel how each inhalation brings energy and each exhalation releases tension. Notice subtle movements in your chest, abdomen, and shoulders."
      },
      {
        number: 4,
        content: "When your mind wanders during breath meditation (and it will), gently acknowledge the thoughts without judgment and return to your breath. This practice of returning builds mindfulness muscles."
      },
      {
        number: 5,
        content: "Today, try 'box breathing' – inhale for 4 counts, hold for 4, exhale for 4, and hold empty lungs for 4. This structured technique further develops breathing control and presence."
      },
      {
        number: 6,
        content: "Bring mindful breathing into daily activities. Whether walking, eating, or working, pause occasionally to notice your breath. These mindful moments create bridges of awareness throughout your day."
      },
      {
        number: 7,
        content: "Reflect on your week of breath practice. What changes have you noticed in your awareness? How does your relationship with your breath influence your state of mind? Consider how to maintain this practice going forward."
      }
    ]
  },
  {
    id: "loving-kindness",
    title: "Loving-Kindness Meditation",
    description: "A 5-day practice to cultivate compassion and loving-kindness toward yourself and others, transforming negative emotions into positive connections.",
    image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=1000",
    categories: ["love", "compassion", "forgiveness"],
    days: [
      {
        number: 1,
        content: "Begin by sitting comfortably with eyes closed. Bring to mind someone who naturally evokes feelings of love and warmth in you. Silently repeat: 'May you be happy. May you be well. May you be safe. May you be peaceful and at ease.' Feel these wishes in your heart."
      },
      {
        number: 2,
        content: "Today, direct loving-kindness toward yourself. Place a hand on your heart and repeat: 'May I be happy. May I be well. May I be safe. May I be peaceful and at ease.' Notice any resistance and gently acknowledge it without judgment."
      },
      {
        number: 3,
        content: "Extend loving-kindness to a neutral person – someone you neither particularly like nor dislike. Perhaps a store clerk or neighbor you barely know. Repeat the same phrases, imagining goodwill flowing toward them."
      },
      {
        number: 4,
        content: "With practice established, bravely direct loving-kindness toward someone difficult in your life. Start with someone mildly challenging before attempting those who have deeply hurt you. Remember the phrases are about your intention, not immediate emotion."
      },
      {
        number: 5,
        content: "Finally, expand loving-kindness to all beings everywhere. Visualize your compassion radiating outward like ripples in a pond, touching all life forms. 'May all beings be happy. May all beings be free from suffering. May all know peace.'"
      }
    ]
  },
  {
    id: "transforming-anger",
    title: "Transforming Anger",
    description: "A 6-day exploration of understanding and transforming anger through Buddhist principles and mindfulness practices.",
    image: "https://images.unsplash.com/photo-1520809178026-285ee08442df?q=80&w=1000",
    categories: ["anger", "peace", "equanimity"],
    days: [
      {
        number: 1,
        content: "Begin by acknowledging anger as a natural human emotion, neither good nor bad in itself. Today, practice recognizing anger's physical signatures in your body - perhaps tension, heat, or rapid breathing. Simply observe these sensations with curiosity rather than judgment."
      },
      {
        number: 2,
        content: "Explore the underlying causes of anger. Often beneath anger lies hurt, fear, or unmet needs. When anger arises today, pause and gently ask yourself: 'What's beneath this feeling? What am I truly needing right now?'"
      },
      {
        number: 3,
        content: "Practice the pause. When anger arises, take three conscious breaths before responding. This creates space between trigger and reaction, allowing wisdom to enter. Remember that responding rather than reacting is a profound strength."
      },
      {
        number: 4,
        content: "Cultivate compassion toward those who trigger anger. Try this reflection: 'Like me, this person wishes to be happy and free from suffering. They may be acting from their own pain or confusion.' Notice how this perspective shift feels."
      },
      {
        number: 5,
        content: "Work with anger through body practices. Try gentle movement, walking meditation, or conscious deep breathing when anger energy arises. These practices help transform and channel the powerful energy of anger constructively."
      },
      {
        number: 6,
        content: "Reflect on anger as a teacher. What has it shown you about your boundaries, values, and needs? With practice, anger can become a signal that guides wise action rather than an overwhelming force. Consider how your relationship with anger has evolved."
      }
    ]
  },
  {
    id: "gratitude-practice",
    title: "Daily Gratitude",
    description: "A 5-day journey into cultivating gratitude as a daily practice, transforming your perspective and opening your heart to abundance.",
    image: "https://images.unsplash.com/photo-1447005497901-b3e9ee359e25?q=80&w=1000",
    categories: ["gratitude", "mindfulness", "joy"],
    days: [
      {
        number: 1,
        content: "Begin with a simple morning gratitude ritual. Before rising from bed, think of three things you're grateful for. They can be as simple as 'the warmth of my blanket' or as profound as 'the love in my life.' Notice how this sets a positive tone for your day."
      },
      {
        number: 2,
        content: "Today, focus on gratitude for your body. Despite any challenges or imperfections, acknowledge the miracle of your physical form - your beating heart, breathing lungs, seeing eyes. Express thanks for specific functions your body performs without conscious effort."
      },
      {
        number: 3,
        content: "Practice gratitude for difficulties. Consider one challenge you're facing and reflect: 'What might this difficulty be teaching me? How might it be helping me grow?' Find even one small aspect of this challenge to appreciate."
      },
      {
        number: 4,
        content: "Express gratitude directly to others. Send a message of appreciation to someone who has positively impacted your life. Be specific about what they did and how it affected you. Notice how this expression feels for both you and the recipient."
      },
      {
        number: 5,
        content: "Create a gratitude meditation. Sit quietly and bring to mind the vast network of people, events, and conditions that enable your daily life. From the farmers who grew your food to historical figures whose discoveries shape your world, acknowledge this interconnected web of support."
      }
    ]
  },
  {
    id: "wisdom-reflections",
    title: "Wisdom Reflections",
    description: "A 7-day journey exploring Buddhist wisdom teachings through contemplative reflections and practical applications.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000",
    categories: ["wisdom", "mindfulness", "meditation"],
    days: [
      {
        number: 1,
        content: "Contemplate impermanence. Take time today to notice the changing nature of everything around you - the weather, your emotions, conversations, sensations in your body. Rather than resisting change, practice greeting it with curiosity and openness."
      },
      {
        number: 2,
        content: "Reflect on interconnection. Consider an everyday object like a coffee cup. Contemplate all the elements that had to come together for it to exist - clay, potter's skill, transportation systems, the concept of 'cup' itself. See how nothing exists in isolation."
      },
      {
        number: 3,
        content: "Explore the nature of suffering. Notice when you experience dissatisfaction today. Is it coming from wanting things to be different than they are? Practice gently acknowledging 'wanting mind' without immediately trying to fulfill every desire."
      },
      {
        number: 4,
        content: "Contemplate the middle way. Where in your life might you be swinging between extremes? Perhaps work and rest, indulgence and denial, or speech and silence. Consider how balance might look in these areas of your life."
      },
      {
        number: 5,
        content: "Reflect on emptiness. Choose an emotion you experience today and investigate: Where exactly is this feeling located? Does it have a shape or color? Does it remain constant or change? Notice how difficult it is to find any solid, permanent essence."
      },
      {
        number: 6,
        content: "Consider right action. Before making decisions today, pause to ask: 'Is this beneficial for myself and others? Is it motivated by kindness? Is it aligned with my deepest values?' Let wisdom guide your choices rather than habit or impulse."
      },
      {
        number: 7,
        content: "Contemplate non-self. Observe the changing nature of your preferences, thoughts, and identity throughout the day. Notice how 'you' might appear differently in various contexts. What remains constant amid these changes? What feels like your essential nature?"
      }
    ]
  },
  {
    id: "inner-peace",
    title: "Cultivating Inner Peace",
    description: "A 6-day journey to discover and nurture inner peace through simple daily practices and mindful awareness.",
    image: "https://images.unsplash.com/photo-1471513671800-b09c87e1497c?q=80&w=1000",
    categories: ["peace", "meditation", "equanimity"],
    days: [
      {
        number: 1,
        content: "Create a peace corner in your home - a simple space with minimal distractions where you can sit quietly. Spend 5-10 minutes here today, simply breathing and setting an intention to cultivate peace within yourself regardless of external circumstances."
      },
      {
        number: 2,
        content: "Practice peace in motion today. During everyday activities like washing dishes, walking, or showering, bring full attention to the sensations involved. Notice how this mindful engagement naturally quiets mental chatter and brings a sense of calm presence."
      },
      {
        number: 3,
        content: "Explore peace amid sounds. Sit somewhere with ambient noise and practice receiving sounds without resistance or labeling. Whether pleasant or unpleasant, can you allow sounds to simply rise and fade like waves? Notice how peace doesn't require silence."
      },
      {
        number: 4,
        content: "Cultivate equanimity toward emotions. When strong feelings arise today, practice naming them: 'anger present,' 'joy present,' or 'anxiety present.' Create space around emotions rather than identifying fully with them. Watch how this simple distance fosters inner steadiness."
      },
      {
        number: 5,
        content: "Practice peace in relationships. In conversations today, try listening fully before formulating your response. Notice any urgency to interrupt or plan your next words. How does this attentive presence affect the interaction and your internal state?"
      },
      {
        number: 6,
        content: "Reflect on peace as your natural state. Consider that perhaps peace isn't something to achieve but to uncover by removing what obscures it. What habits or thought patterns might be clouding your inherent tranquility? How might you gently let these go?"
      }
    ]
  }
];

export function getAllPlans(): Plan[] {
  return plans;
}

export function getPlanById(id: string): Plan | undefined {
  return plans.find(plan => plan.id === id);
}

export function getPlansByCategory(category: string): Plan[] {
  return plans.filter(plan => plan.categories.includes(category.toLowerCase()));
}

export function searchPlans(query: string): Plan[] {
  const lowercaseQuery = query.toLowerCase();
  return plans.filter(plan => 
    plan.title.toLowerCase().includes(lowercaseQuery) ||
    plan.description.toLowerCase().includes(lowercaseQuery) ||
    plan.categories.some(category => category.toLowerCase().includes(lowercaseQuery))
  );
}
