import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
export default function Statistics({ title, stats }) {
     const isTitle = { title };
    return (
        <section class="statistics">
  <h2 class="title">{isTitle && title}</h2>
<div>
            <ul class="stat-list">
                {stats.map((stat) => (
                    <li class="item" key = {stat.id}>
                        <StatisticsItem label={stat.label} percentage = {stat.percentage} />
</li>
                ))}
            </ul>
            </div>
            </section>
)
    
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}